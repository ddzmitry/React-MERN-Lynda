import React from 'react';
import Header from './Header';



class  App  extends React.Component {

    state = {

      pageHeader: 'Naming Something!™ '
    }

    componentDidMount() {
      //DID mount! 
      //AJAX fetching! 
      // timers//listeners
     console.log('CMD')
    }
    
    componentWillMount() {
      //wil get on DOM
       console.log('CWM')
    }

    componentWillUnmount() {
      //after timer to clean it
       console.log('CWU')
    }
    
    
    
    render(){
    return (
    <div className="App">
       <Header message={this.state.pageHeader} />
          <div>
          {this.state.test}
         </div>
    </div>
  );
    }
};

export default App;
