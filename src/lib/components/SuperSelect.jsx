
import React, { Component, Fragment } from 'react'
import './SuperSelect.css';
import "antd/dist/antd.css";
import { TreeSelect } from "antd";
const { SHOW_CHILD } = TreeSelect;

class SuperSelect extends Component {
  state = {
    treeData: [],
    value:null
  };

  componentDidMount(){
     this.setState({treeData:this.props.options,
      value:this.props.defaultChecked
    })
  }

  componentDidUpdate(prevProps){
    if(this.props.options!==prevProps.options){
      this.setState({treeData:this.props.options})
    }
    if(this.props.defaultChecked!==prevProps.defaultChecked){
      this.setState({value:this.props.defaultChecked})
    }
  }

  onChange = value => {
    // let labelArr=[]
    // const{treeData}=this.state;
    // if (value[0] && value[0].value === "All") {
    //     this.setState({value: treeData[0].children},()=>{
    //     this.props.getSelectedValue(this.state.value)
    //     })
    // } else {
    //   let data=treeData[0].children;
    //   value.map((v)=>{
    //     labelArr.push({label:v.label})
    //     return labelArr
    //   })
    //   const myArrayFiltered = data.filter((el) => {
    //     return labelArr.some((f) => {
    //       return f.label === el.title;
    //     });
    //   });
    //     this.setState({value:myArrayFiltered},()=>{
    //     this.props.getSelectedValue(this.state.value)
    //     })
    // }

    this.props.getSelectedValue(value)
  };

  render() {
    const tProps = {
      treeData: this.state.treeData,
      value: this.state.value,
        onChange: this.onChange,
        treeCheckable: true,
        showCheckedStrategy: SHOW_CHILD,
        placeholder: 'Please select',
        style: {
          width: '100%',
        },
        dropdownStyle:{  },
        dropdownMatchSelectWidth: true,
        labelInValue: true,
        treeNodeFilterProp:'title',
        treeIcon:false,
        showArrow:true,
      
    };
    return(
      <Fragment>
     <TreeSelect     maxTagPlaceholder={`+ ${this.state.value.length-1 } Selected`}
                 maxTagCount={1}{...tProps}/>
     </Fragment>
    )
  }
}

export default SuperSelect;


