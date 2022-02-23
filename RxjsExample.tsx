import React, { useEffect, useState } from 'react';
import { Observable, fromEvent } from 'rxjs';
import { switchMap } from 'rxjs/operators';

interface IUser {
  name: string;
}

const RxjsExample = () => {
  const buttonEl = React.useRef(null);
  const [tips, setTips] = useState<string>('');

  const checkAuth = () => {
    return Observable.create((observer) => {
      setTips('Checking Auth...');
      setTimeout(() => {
        observer.next(true);
      }, 2000);
    });
  };

  const fetchUser = () => {
    return Observable.create((observer) => {
      setTips('Fetching User...');
      setTimeout(() => {
        observer.next({ name: 'Ari' });
      }, 2000);
    });
  };

  useEffect(() => {
    const clicky = fromEvent(buttonEl.current, 'click') //版本间API变化还蛮大的
      .pipe(
        switchMap((e) => checkAuth()),
        switchMap((isAuth) => {
          if (isAuth) {
            return fetchUser();
          }
        })
      )
      .subscribe((user: IUser) => {
        console.log(1, user);
        setTips(user.name);
      });
    return () => clicky.unsubscribe();
  }, []);

  return (
    <div className="row">
      <div className="col-md-8">
        <h5>Rxjs Example</h5>
        <button ref={buttonEl} className="btn btn-primary">
          Get User
        </button>
        <div id="cbResult">{tips}</div>
      </div>
    </div>
  );
};

export default RxjsExample;
