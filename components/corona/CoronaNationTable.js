
const CoronaNationTable = props => {
  const {
    nation
  } = props.data;

  return (
    <>
      <table className="table text-center col-12">
        <thead>
          <tr className="font-weight-bold">
            <th className="">국가</th>
            <th className="">확진자 : </th>
            {/* <th className="">격리해제</th> */}
            <th className="">사망자</th>
            <th className="">사망률</th>
          </tr>
        </thead>
        <tbody>
        {
          nation.map((item, index) => {
            return (
              <tr key={index} className={
                item.nation === '합계' ? 'bg-dark text-white font-weight-bold' : ''
              }>
                <td>{item.nation}</td>
                <td>
                  {item.infection.toLocaleString()}&nbsp;(
                  <label className="m-0 text-danger">+ 
                    {
                      typeof item.increase == 'object' ? item.increase : item.increase.toLocaleString()
                    }
                  </label>)
                </td>
                <td>{item.die.toLocaleString()}</td>
                <td>
                {
                  (item.infection / item.die == 'Infinity') ? 0 : (item.die / item.infection * 100).toFixed(2)
                }
                </td>
              </tr>
            );
          })
        }
        </tbody>
      </table>
    </>
  )
};

export default CoronaNationTable;