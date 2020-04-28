import React, { Component } from 'react';

class Section extends Component {
    constructor(props) {
        super(props);
        this.state= {
            trangthai:0

        }
        
    }
    renderButton = () => {
        return (
            <div className="row">
                            <div className="btn btn-group">
                                <div className="btn btn-info" onClick={()=>this.editClick()} >Edit</div>
                                <div className="btn btn-warning">Remove</div>
                            </div>
                          
                        </div>
        )
        
    }
    
    renderForm = () => {
        return (
            <div className="row">
                            <div className="btn btn-group">
                            <div className="form-group">
                                <input defaultValue={this.props.title} type="text" name id className="form-control" placeholder aria-describedby="helpId" />
                                <div className="btn btn-block btn-success" onClick={()=>this.saveClick()}>Save</div>
                            </div>
                            </div>
                        </div>
        )
        
    }

    checkDisplay = () => {
        if (this.state.trangthai===0) {
            return this.renderButton();
        }
        else {return this.renderForm();}

    }
    editClick = () => {
        this.setState({trangthai:1});
    }
    saveClick = () => {
        this.setState({trangthai:0});
    }

    render() {
        return (
                       
            <section>
                <div className="container">
                <div className="row align-items-center">
                    <div className={"col-lg-6 "+ this.props.position1}>
                    <div className="p-5">
                        <img className="img-fluid rounded-circle" src={this.props.img} alt="" />
                    </div>
                    </div>
                    <div className={"col-lg-6 "+ this.props.position2}>
                    <div className="p-5">
                        <h2 className="display-4"> {this.props.title}</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati.</p>
                        {this.checkDisplay()}
                        

                        
                   
                    </div>
                    </div>
                </div>
                </div>
            </section>
            /* <section>
                <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                    <div className="p-5">
                        <img className="img-fluid rounded-circle" src="./img/02.jpg" alt="" />
                    </div>
                    </div>
                    <div className="col-lg-6">
                    <div className="p-5">
                        <h2 className="display-4">We salute you!</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati.</p>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            <section>
                <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 order-lg-2">
                    <div className="p-5">
                        <img className="img-fluid rounded-circle" src="img/03.jpg" alt="" />
                    </div>
                    </div>
                    <div className="col-lg-6 order-lg-1">
                    <div className="p-5">
                        <h2 className="display-4">Let there be rock!</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati.</p>
                    </div>
                    </div>
                </div>
                </div>
            </section> */
            

        );
    }
}

export default Section;