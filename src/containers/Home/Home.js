export function Home(props) {
  
  const goToHome2 = () => {
    const {history} = props;
    history.push('/Home2')
  }

  return (
    <div className="App" onClick={goToHome2}>
      Home
    </div>
  );
}
