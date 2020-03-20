import React from 'react';
import PropTypes from 'prop-types';




export class Pager extends React.Component {

    
   
render(props) {

        let debut ="";
        let minus5 ="";
        let minus1 ="";
        let plus1="";
        let plus5="";
        let fin="";

        if(this.props.pagination.page > 0)
            debut =<div className="numero" onClick={() => this.props.onPageChange(0)}>debut</div>;

        if(this.props.pagination.page > 4)
            minus5 = <div className="numero" onClick={() => this.props.onPageChange(this.props.pagination.page-5)}>{this.props.pagination.page-4}</div>;

        if(this.props.pagination.page > 0)
            minus1 = <div className="numero" onClick={() => this.props.onPageChange(this.props.pagination.page-1)}>{this.props.pagination.page}</div>;

        if(this.props.pagination.page < this.props.pagination.nombrePages-1)
            plus1 = <div className="numero" onClick={() => this.props.onPageChange(this.props.pagination.page+1)}>{this.props.pagination.page+2}</div>;

        if(this.props.pagination.page < this.props.pagination.nombrePages-5)
            plus5 = <div className="numero" onClick={() => this.props.onPageChange(this.props.pagination.page+5)}>{this.props.pagination.page+6}</div>;

        if(this.props.pagination.page < this.props.pagination.nombrePages-1)
            fin =<div className="numero" onClick={() => this.props.onPageChange(this.props.pagination.nombrePages-1)}>fin</div>;
        return (
        <div className="pager">
            <div className="pager1">
                <div className="numeroprec">
                    {debut}
                    {minus5}
                    {minus1}
                </div>
            <div className="numeroactuel numero" >{this.props.pagination.page+1}</div>
                <div className="numerosuiv">
                    {plus1}
                    {plus5}
                    {fin}
                </div>
            </div>
            <div className="pager2">
            <div className="numero" onClick={() => this.props.onPageChange(Math.floor(Math.random()*this.props.pagination.nombrePages))}>feeling lucky?</div>
            </div>
        </div>
)
    }

}
Pager.propTypes = {
    data: PropTypes.object.isRequired,
};


export default Pager;

/*
<div className="form">
<div onClick={() => this.props.onPageChange(this.props.pagination.page -5)}> {doubleLeft}</div>
<div onClick={() => this.props.onPageChange(this.props.pagination.page -1)}> {left}</div>
<div onClick={() => this.props.onPageChange(this.props.pagination.page +1)}>{this.props.pagination.page +1}</div>
<div onClick={() => this.props.onPageChange(this.props.pagination.page +1)}> {right}</div>
<div onClick={() => this.props.onPageChange(this.props.pagination.page +5)}> {doubleRight}</div>
</div>
)
*/