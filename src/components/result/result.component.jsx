import qn from '../../questions.json'

import './result.style.css'



const Result = ({tag,result}) => {


    const closeResult = () =>{
          document.getElementById('resultWrap').style.display = 'none' ;
    }

    return(
        <div id="resultWrap" className='App__result'>
           <div title='Close this page' className='close-result' onClick={closeResult}>❌</div>
            <h2 className=''>Results</h2>
           <table className='App__result-table'>
                    <tr>
                        <th>Questions</th>
                        <th>Ratings</th>
                    </tr>
                    {
                        qn.questions[tag].map((el,idx)=>{
                            return( <tr>
                                <td>{el}</td>
                                <td>{result[idx]}</td>
                            </tr>)
                        })
                    }

            </table>
        </div>
    );
}

export default Result;