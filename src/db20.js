import PouchDB from 'pouchdb';
 
export default class DB2 {
    constructor(name =  'category2') {
        this.db2 = new PouchDB(name);
        // console.log('db2.js constructor1', this.db2);
        // this.db2.destroy().catch(function(err) { console.log(err.toString()) });
        // let a = 'tel aviv';
        // let b = a.replace(/ /g,"_") + '_id';
        // let doc = {
        //       _id: b,
        //       title: a,
        //       createdat: new Date(),
        //       updatedat: new Date()
        //   };
        // this.db2.put(doc, { force: true }, function(err, res) {
        //   if (err) { console.log('db2;constructor;puterr', err.toString()) }
        //   console.log('res', res);
        // });
        // this.db2.get('idtelaviv', function(err, doc) {
        //     if (err) { 
        //       console.log('db2.js;constructor;get err=', err.toString()); 
        //       if (doc === undefined || doc === null || !doc._id) {
        //          doc = {
        //            _id: 'telavivid',
        //            category: 'tel aviv',
        //            createdat: new Date(),
        //            updatedat: new Date()
        //         };
        //         return doc;
        //       }
        //     } 
        //   });
        //   a = 'rishon le Zion';
        //   b = a.replace(/ /g,"_") + '_id';
        //   doc = {
        //         _id: b,
        //         title: a,
        //         createdat: new Date(),
        //         updatedat: new Date()
        //     };
        //   this.db2.put(doc, { force: true }, function(err, res) {
        //     if (err) { console.log('db2;constructor;puterr', err.toString()) }
        //     console.log('res', res);
        //   });  
        //   a = 'ramat gan';
        //   b = a.replace(/ /g,"_") + '_id';
        //   doc = {
        //         _id: b,
        //         title: a,
        //         createdat: new Date(),
        //         updatedat: new Date()
        //     };
        //   this.db2.put(doc, { force: true }, function(err, res) {
        //     if (err) { console.log('db2;constructor;puterr', err.toString()) }
        //     console.log('res', res);
        //   }); 
          this.db2.compact().then(function (info) { }).catch(function (err) {
            console.log('db2;compaction err=', err.toString());
           });
    } // constructor
    async getcategories () {
        // include_docs when query returns it include all data instead of
        // where or not the documents exists
        let all = await this.db2.allDocs({ include_docs: true } ,
           function(err, doc) {
              if (err) { console.log('db2.js getcategories err=' + err.toString()); }
              if (doc.rows.length === 0) {
                console.log('db2.js getcategories befor doc.length=0');
              } else { console.log('db2.js getcategories was doc.length=', doc.rows.length); }
            }
          );
        let a = {}; // actually it is array of docs
        // all.rows response with docs
        all.rows.forEach((b) => { a[b.id] = b.doc; });
        return a ;
    }
  
    async createcategory(c) {
        c.createdat = new Date();
        c.updatedat = new Date();
        let a = Date.now();
        c._id = c.title + a.toString();
        const res = await this.db2.put({ ...c}, function(err, response) {
            if (err) { console.log('db2.js; create err=', err.toString()); }
            console.log('db2.js; createnote res=', response);
        });
        return res;
    }
    async getcat(_id) { 
        let yes = false;
        let a = await this.db2.get(_id, function(err, doc) {
            if (err) { return console.log(err.toString()); }
            else { yes = true }
        });
        if (yes) { console.log('db2;getcat;a=', a); }
        return a;
     }
    async editcat(c) {
        console.log('db2;editcat;c=', c);
        const ddb = this.db2;
        c.updatedat = new Date();
        // let a = Date.now();
        // c._id = c.title + a.toString();
        const res = await this.db2.put({ ...c}, function(err, response) {
            if (err) { console.log('db2.js; create err=', err.toString()); }
            console.log('db2.js; createnote res=', response);
        });
        return res;
    }
    // async editnote(note) {
    //     console.log('db1;editnote;note', note);
    //     let dbb = this.db1;
    //     let yes = false;
    //     note.updatedat = new Date();
    //     await dbb.put(note, function(error, response) {
    //         if (error) { console.log('db1.js;editnote put error=', 
    //           error.toString()); }
    //         yes = response.ok;
    //     });
    async getnote(note) {  }
}
