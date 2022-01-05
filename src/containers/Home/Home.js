import { useSelector, useDispatch } from 'react-redux';

import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
} from '../../redux/modules/counter.module';

export function Home(props) {
  const count = useSelector(selectCount);
  // console.log(count);

  const goToHome2 = () => {
    const {history} = props;
    history.push('/Home2')
  }

  return (
    <div className="App">
      Home
      <button  onClick={goToHome2}/>
      <div>
        {count}
      </div>
    </div>
  );
}
