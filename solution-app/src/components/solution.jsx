import React, { Component } from 'react';

class Solution extends Component {
    state = { 
        solutions:[
            {number: 1, description: 'Solution 1', votes: 1},
            {number: 2, description: 'Solution 2', votes: 2},
            {number: 3, description: 'Solution 3', votes: 3},
            {number: 4, description: 'Solution 4', votes: 4},
            {number: 5, description: 'Solution 5', votes: 5},
            {number: 6, description: 'Solution 6', votes: 6},
            {number: 7, description: 'Solution 7', votes: 7},
            {number: 8, description: 'Solution 8', votes: 8},
            {number: 9, description: 'Solution 9', votes: 9},
            {number: 10, description: 'Solution 10', votes: 10},

        ]
    } 

    handleDealte = (s) => {
        // const solutions = this.state.solutions.filter(Solution => Solution.number !== s.number)
        const solutions = [...this.state.solutions, {number: 11, description: 'Solution 11', votes: 11}]
        this.setState({
            solutions: solutions
        })
    }
    
    render() { 
        if(this.state.solutions.length === 0) return (<p>There are no solutions!</p>)
        return (
            <table className="table">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">标题</th>
                <th scope="col">阅读</th>
                <th scope="col">操作</th>
                </tr>
            </thead>
            <tbody>
                {this.state.solutions.map(Solution => {
                    return (
                        <tr key={Solution.number}>
                            <td>{Solution.number}</td>
                            <td>{Solution.description}</td>
                            <td>{Solution.votes}</td>
                            <td><button onClick= {() => {this.handleDealte(Solution)}} className="btn btn-danger">删除</button></td>   
                        </tr>
                    )
                })}
            </tbody>
            </table>
        );
    }
}
 
export default Solution;