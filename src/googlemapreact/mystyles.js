const K_WIDTH = 40;
const K_HEIGHT = 40;

const mystyles = {
	// by default map object has left top corner 
	// at alat alng,so let us set origin to 0,0 :
	position: 'absolute',
	width: K_WIDTH,
	height: K_HEIGHT,
	left: -K_WIDTH / 2,
	top: -K_HEIGHT / 2,
	border: 'rgba(233, 40, 40, 0.7)',
	borderRadius: K_HEIGHT,
	backgroundColor: 'white',
	textAlign: 'center',
	color: 'rgb(125, 125, 100)',
	fontSize: 16,
	fontWeight: 'bold',
	padding: 4
};
export { mystyles };