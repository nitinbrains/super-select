
import React, { Component, Fragment } from 'react'
import './SuperSelect.css';
import "antd/dist/antd.css";
import { TreeSelect } from "antd";
const { SHOW_PARENT } = TreeSelect;

class SuperSelect extends Component {
  state = {
    treeData: [],
    value:null
  };

  componentDidMount(){
     this.setState({treeData:this.props.options})
  }

  componentDidUpdate(prevProps){
    if(this.props.options!==prevProps.options){
      this.setState({treeData:this.props.options})
    }
  }

  onChange = value => {
    let labelArr=[]
    const{treeData}=this.state;
    if (value[0] && value[0].value === "All") {
        this.setState({value: treeData[0].children},()=>{
        this.props.getSelectedValue(this.state.value)
        })
    } else {
      let data=treeData[0].children;
      value.map((v)=>{
        labelArr.push({label:v.label})
        return labelArr
      })
      const myArrayFiltered = data.filter((el) => {
        return labelArr.some((f) => {
          return f.label === el.title;
        });
      });
        this.setState({value:myArrayFiltered},()=>{
        this.props.getSelectedValue(this.state.value)
        })
    }
  };

  render() {
    const tProps = {
      treeData: this.state.treeData,
      value: this.state.value,
      onChange: this.onChange,
      treeCheckable: true,
      treeDefaultExpandAll: true,
      showCheckedStrategy: SHOW_PARENT,
      searchPlaceholder: "Please select",
      dropdownMatchSelectWidth: true,
      labelInValue: true,
      treeNodeLabelProp: "title",
      maxTagCount: 1,
      style: {
        width: "100%"
      }
    };
    return(
      <Fragment>
     <TreeSelect {...tProps} />
     </Fragment>
    )
  }
}

export default SuperSelect;


