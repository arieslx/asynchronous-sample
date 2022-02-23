import React, { useState } from 'react';
import Q from 'q';

interface IUser {
  name: string;
}

const QExample = () => {
  const [tips, setTips] = useState<string>('');

  const checkAuth = () => {
    return new Promise((resolve, reject) => {
      setTips('Checking Auth...');
      setTimeout(() => {
        resolve(true);
      }, 2000);
    });
  };

  const fetchUser = () => {
    return new Promise((resolve, reject) => {
      setTips('Fetching User...');
      setTimeout(() => {
        resolve({ name: 'Ari' });
      }, 2000);
    });
  };

  return (
    <div className="row">
      <div className="col-md-8">
        <h5>Q Example</h5>
        <button
          className="btn btn-primary"
          onClick={() => {
            Q.resolve(checkAuth())
              .then((isAuth) => {
                if (isAuth) {
                  return fetchUser();
                }
              })
              .then((user: IUser) => {
                setTips(user.name);
              })
              .done();
          }}
        >
          Get User
        </button>
        <div id="cbResult">{tips}</div>
      </div>
    </div>
  );
};

export default QExample;
