import PouchDB from 'pouchdb';

export default class DB1 {
    constructor(name =  'location1') {
        this.db1 = new PouchDB(name);
        this.db1.get('perlov3301@gmail.com', function(err, doc) {
            doc = {
                _id: 'perlov3301@gmail.com',
                title: 'default Location',
                body: 'tel-aviv',
                alat: '32.084',
                alng: '34.774',
                category: 'tel aviv',
                createdat: new Date(),
                updatedat: new Date()
            };
            if (err) {
                if (err.name === 'not found' || err.status === 409)  {
                    this.db1.put(doc, function(err, res) {
                        if (err) { console.log('db1.js;constructor put err'); }
                    });
                } else { 
                    console.log('db1.js;constructor;error after put default') }
            }

        });
    }
    async getallnotes( ) {
        // include_docs when query returns it include all data instead of
        // where or not the documents exists
        let allnotes = await this.db1.allDocs({ include_docs: true, descending: false }
          ,
           function(err, doc) {
              if (err) { console.log('db1.js getallnotes err=' + err.toString()); }
              if (doc.rows.length === 0) {
                console.log('db1.js geallnotes befor doc.length=0');
              } else { console.log('db1.js geallnotes was doc.length=', doc.rows.length); }
            }
          );
        let notes = {};
        // allnotes.rows response with docs
        allnotes.rows.forEach((n) => {   notes[n.id] = n.doc;  });
        return notes;
    }
    async getcategory(categ) {
        console.log('db1;getcategory;categ=', categ);
        // var myId = 'foo';
        // db.query(function(doc, emit) {
        //   if (doc._id === myId) {
        //     emit(doc);
        //   }
        // }, {include_docs : true} , function(err, results) {
        //   if (err) { return console.log(err); }
        //   // handle result
        // });
        let a = await this.db1.query(function(doc, emit) {
            if (doc.category === categ.title) { emit(doc); }
          }, {include_docs : true} , function(err, results) {
            if (err) { return console.log(err); }
            // handle result
          });
        let notes = {}; // notes.rows response with docs
        a.rows.forEach((n) => {   notes[n.id] = n.doc;  });
        return notes;
    }
    async getcatnotesdb (c) {
        let dbb = this.db1;
        let notes = {}; // notes.rows response with docs

        let designdoc = {
            _id: '_design/index',
            views: {
              index: {
                map: function mapFun(doc, emit) {
                  if (doc.category) {
                    emit(doc.category);
                  }
                }.toString()
              }
            }
          };
        dbb.put(designdoc, function(err) {
          if(err && err.name === 'conflict') {
            return console.log('dbjs;put design err=', err.toString());
          }
          // find docs where category === c.title
          console.log('db1js;getcatnotesdb;before query');
          dbb.query('index',
            {
              key: c.title,
              include_docs: true
            },
            function (err, res) {
              res.rows.forEach((n) => {   notes[n.id] = n.doc;  });
            }
          );
        });
        return notes;
    }
    async createnote(note) {
        note.createdat = new Date();
        note.updatedat = new Date();
        let a = Date.now();
        note._id = note.title + a.toString();
        const res = await this.db1.put({ ...note}, function(err, response) {
            if (err) { console.log('db1.js; createnote err=', err.toString()); }
            console.log('db1.js; createnote res=', response);
        });

        return res;
    }
    async editnote(note) {
        console.log('db1;editnote;note', note);
        let dbb = this.db1;
        // let yes = false;
        note.updatedat = new Date();
        // dbb.get(note._id, function(err, doc) {
        //     if (err) { return console.log('db1;editnote;err=', err)}
        //     dbb.put(doc);
        // });
        const res = await dbb.put({...note}, function(error, response) {
            if (error) { console.log('db1.js;editnote put error=', 
              error.toString()); }
           // yes = response.ok;
        });
        // const res = await this.db1.post({ ...note});
        // const res = await this.db1.get(note._id, function(err, doc) {
        //     if (err) { console.log('db1.js;editcat get err=', err.toString()); }
        //     console.log('db1;editnote;afterput doc=', doc);
           
        // });
        return res;
    }
    async getnote(_id) { 
        let yes = false;
        let a = await this.db1.get(_id, function(err, doc) {
            if (err) { return console.log(err.toString()); }
            else { yes = true }
        });
        if (yes) { console.log('db1;getnote;a=', a); }
        return a;
     }
    async removenote(note1) {
        // let dbchanges = this.db1.changes({doc_ids: [note1._id]})
        console.log('db1;removenote;note=', note1);
        let dbb = this.db1;
        let yes = false;
        let n = await this.db1.get(note1._id, function(err, doc)  {
            if(err) { console.log('db1;removenote;get by id n=', n); }
        });
        await this.db1.remove(n, function(err, res) {
            if (err) { return console.log('db1;removenote;remove err=', 
              err.toString()); }
        console.log('db1;removenote;res=', res)
            yes = res.ok;
          });
        return yes;
    }
}
