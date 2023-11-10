import  { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
const NewsDetail = () => {
  const [fakeData, setFakeData] = useState([]);
  let param = useParams();
   let x=Number(param.id);
 
  useEffect(() => {
    fetch('/news.json')
      .then((response) => response.json())
      .then((data) => setFakeData(data));
  }, []);

  return (
    <div>
      
      <div >
        {fakeData.map((data) => (
          <div key={data.id}>
            {param.id === data.id && x!=0&& (
              <div className="card w-auto m-3 bg-base-100 shadow-xl ">
                <figure>
                  <img
                    className="w-3/4 h-48"
                    src={data.img}
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{data.name}</h2>
                  <p>{data.para}</p>
                </div>
              </div>
            )}
            {x==0&& (
              <div className="card w-auto m-3 bg-base-100 shadow-xl ">
                <figure>
                  <img
                    className="w-3/4 h-48"
                    src={data.img}
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{data.name}</h2>
                  <p>{data.para}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsDetail;