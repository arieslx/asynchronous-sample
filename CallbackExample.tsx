import React, { useState } from 'react';

const CallbackExample = () => {
  const [tips, setTips] = useState<string>('');

  const checkAuth = (cb) => {
    setTips('Checking Auth...');
    setTimeout(() => {
      cb(true);
    }, 2000);
  };

  const fetchUser = (cb) => {
    setTips('Fetching User...');
    setTimeout(() => {
      cb({ name: 'Ari' });
    }, 2000);
  };

  return (
    <div className="row">
      <div className="col-md-8">
        <h5>Callback Example</h5>
        <button
          className="btn btn-primary"
          onClick={() => {
            checkAuth((auth) => {
              if (auth) {
                fetchUser((user) => {
                  setTips(user.name);
                });
              }
            });
          }}
        >
          Get User
        </button>
        <div id="cbResult">{tips}</div>
      </div>
    </div>
  );
};

export default CallbackExample;
