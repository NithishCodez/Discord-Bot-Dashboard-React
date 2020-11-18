import { Image, Button } from 'semantic-ui-react'

function App() {
  return (
    <>
    <div className="app">
    <div className="heading" style={styles.heading}>
    <Image src='https://cdn.discordapp.com/avatars/769841844795867137/4ca702264831d1158c5c4d4643dbbaa8.png?size=1024' size='small' circular centered={true}/>
    <h1 style={{color: 'white', marginTop: '2%', fontSize: '35px', fontFamily: 'monospace'}}>Discord Bot Dashboard</h1>
    <Button inverted color='orange' style={styles.button} onClick={() => {alert('You clicked invite')}}>Invite</Button>&nbsp; &nbsp; &nbsp;
    <Button inverted style={styles.button} onClick={() => {alert('You clicked Dashboard')}}>Dashboard</Button>
    </div>
    </div>
    </>
  );
}

const styles = {
  heading: {
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  marginTop: '10%',
  },
  button: {
    marginTop: '3vh'
  }
}

export default App;
