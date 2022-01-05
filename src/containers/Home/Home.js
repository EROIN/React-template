import { useSelector, useDispatch } from 'react-redux';

import {
  decrement,
  incrementAsync,
  selectCount,
  selectStatus,
} from '../../redux/modules/counter.module';

import './Home.scss'

export function Home(props) {
  const count = useSelector(selectCount);
  const status = useSelector(selectStatus);
  const dispatch = useDispatch();
  // console.log(count);

  const goToHome2 = () => {
    const {history} = props;
    history.push('/Home2')
  }

  return (
    <div className="container">
      Home
      <button  onClick={goToHome2}>asass</button>
      <button  onClick={() => dispatch(decrement())}>dec</button>
      <button  onClick={() => dispatch(incrementAsync(10))}>increment</button>
      <div>
        {count}
        {status}
      </div>
    </div>
  );
}
