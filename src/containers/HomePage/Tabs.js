import React from 'react';
import { connect } from 'react-redux';

const Tabs = (props) => {
    console.log('Props', props);

   return (
       <div>
           Tabs
       </div>
   )
}

const mapStateToProps = state =>( {
tabs: state.tabs
})

export default connect(mapStateToProps, null)(Tabs);