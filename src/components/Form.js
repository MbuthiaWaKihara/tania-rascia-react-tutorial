import React from 'react';

class Form extends React.Component {
    state = {
        name: '',
        job: '',
    }

    changeName = e => {
        this.setState({
            name: e.target.value,
        })
    }

    changeJob = e => {
        this.setState({
            job: e.target.value,
        })
    }

    submit = e => {
        e.preventDefault();
        if(this.state.name.trim() !== '' && this.state.job.trim() !== ''){
            this.props.handleSubmit(this.state);
            this.setState({
                name: '',
                job: '',
            })
        }
    }

    render() {
        const {name, job} = this.state;

        return(
            <form>
            <label htmlFor="name">Name</label>
            <input
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={this.changeName} />
            <label htmlFor="job">Job</label>
            <input
                type="text"
                name="job"
                id="job"
                value={job}
                onChange={this.changeJob} />
            <button type="submit" onClick={this.submit}>Save</button>
            </form>
        )
    }
}

export default Form;