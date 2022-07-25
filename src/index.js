import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

   class Editor extends React.Component{
      constructor(props){
        super(props)
        this.state={
          value: ''
        }
      }

      render(){
        return <>
        <div className="container">
                <div className="input">
                    <h3>Input</h3>
                    <textarea className="input-text" onChange={(event)=>this.setState({value: event.target.value})}     />
                </div>
                <div className="output">
                    <h3>Pro Note</h3>
                    <div className="output-text">
                      <textarea className='output' value={this.state.value} disabled></textarea>
                   </div>
                </div>                
            </div>
        
        </>
      }

   }












const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <>
      <Editor/>
    </>



);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

