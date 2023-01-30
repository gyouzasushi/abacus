type Op = "ADD" | "SUB" | "MUL" | "DIV"
const symbol = {
    "ADD": "+",
    "SUB": "-",
    "MUL": "*",
    "DIV": "/",
};
class Problem {
    lhs: number;
    rhs: number;
    op: Op;
    ans: number = 0;
    input: number = 0;
    constructor(op: Op) {
        this.lhs = Math.floor(Math.random() * 10000);
        this.rhs = Math.floor(Math.random() * 10000);
        this.op = op;
        switch (this.op) {
            case "ADD":
                this.ans = this.lhs + this.rhs
                break;
            case "SUB":
                this.ans = this.lhs - this.rhs
                break;
            case "MUL":
                this.ans = this.lhs * this.rhs
                break;
            case "DIV":
                this.ans = this.lhs / this.rhs
                break;
        }
    }
    getProblemStr() {
        return `${this.lhs} ${symbol[this.op]} ${this.rhs} = `;
    }
    getInputStr() {
        return `${this.input}`;
    }
    shuffle() {
        this.lhs = Math.floor(Math.random() * 10000);
        this.rhs = Math.floor(Math.random() * 10000);
        switch (this.op) {
            case "ADD":
                this.ans = this.lhs + this.rhs
                break;
            case "SUB":
                this.ans = this.lhs - this.rhs
                break;
            case "MUL":
                this.ans = this.lhs * this.rhs
                break;
            case "DIV":
                this.ans = this.lhs / this.rhs
                break;
        }
        this.input = 0;
    }
}

const problem = new Problem("MUL");
function handleKeyDown(ev: KeyboardEvent) {
    const x = parseInt(ev.key);
    if (isNaN(x)) return;
    problem.input *= 10;
    problem.input += x;
    drawProblem();
}
document.onkeydown = handleKeyDown;

async function drawProblem() {
    document.getElementById("problem_area")!.textContent = problem.getProblemStr();
    document.getElementById("input_area")!.textContent = problem.getInputStr();
    if (problem.input === problem.ans) {
        document.getElementById("input_area")!.style.color = '#74b666';
        document.onkeydown = null;
        await new Promise(f => setTimeout(f, 500));
        document.getElementById("input_area")!.style.color = '#000000';
        problem.shuffle();
        document.getElementById("problem_area")!.textContent = problem.getProblemStr();
        document.getElementById("input_area")!.textContent = problem.getInputStr();
        document.onkeydown = handleKeyDown;

    } else if (problem.input.toString().length >= problem.ans.toString().length) {
        document.getElementById("input_area")!.style.color = '#E6B05F';
        document.onkeydown = null;
        await new Promise(f => setTimeout(f, 500));
        problem.input = 0;
        document.getElementById("input_area")!.style.color = '#000000';
        document.getElementById("input_area")!.textContent = problem.getInputStr();
        document.onkeydown = handleKeyDown;
    }
}
drawProblem();