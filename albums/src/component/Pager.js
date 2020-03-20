import React from 'react';
import PropTypes from 'prop-types';



export class Pager extends React.Component {


    render(props) {
        //console.log(this.props.pagination.nombrePages);

        return (
        <div className="pager">
        <div className="numero" onClick={() => this.props.onPageChange(this.props.pagination.page-1)}>{this.props.pagination.page}</div>
        <div className="numero" onClick={() => this.props.onPageChange(this.props.pagination.page)}>{this.props.pagination.page+1}</div>
        <div className="numero" onClick={() => this.props.onPageChange(this.props.pagination.page+1)}>{this.props.pagination.page+2}</div>
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