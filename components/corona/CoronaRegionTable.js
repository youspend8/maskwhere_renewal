import {
  locationMap
} from '../../constants/Common';

const CoronaRegionTable = props => {
  const { 
    curr,
    diff,
    release,
    died,
    rate,
    flow,
    releaseFlow
  } = props.data;

  let keys = Object.keys(curr);
  keys.splice(0, 2);

  return (
    <>
      <table className="table text-center col-12">
        <thead>
          <tr className="font-weight-bold">
            <th className="">지역</th>
            <th className="">확진자</th>
            <th className="">격리해제</th>
            <th className="">사망자</th>
            <th className="">완치율</th>
            <th className="">발생률</th>
          </tr>
        </thead>
        <tbody>
        {
          keys.map((item, index) => {
            if (item !== 'createDate') {
              return (
                <tr key={index} className={
                  item === 'total' ? 'bg-dark text-white font-weight-bold' : ''
                }>
                  <td>{locationMap[item].toLocaleString()}</td>
                  <td>
                    {curr[item].toLocaleString()}<br/>(
                    <label className="m-0 text-danger">+ 
                      {diff[item].toLocaleString()}
                    </label>)
                  </td>
                  <td>{release[item].toLocaleString()}</td>
                  <td>{died[item].toLocaleString()}</td>
                  <td>{(Number.parseFloat(release[item]) / Number.parseInt(curr[item]) * 100).toFixed(1) + '%'}</td>
                  <td>{rate[item].toLocaleString()}</td>
                </tr>
              );
            }
          })
        }
        </tbody>
      </table>
      
      <div className="col-12 my-2">
        발생률 : 인구 10만 명당 (지역별 인구 출처 : 행정안전부, 주민등록인구현황 (’20.1월 기준))
      </div>
    </>
  )
};

export default CoronaRegionTable;