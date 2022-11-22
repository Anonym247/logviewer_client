import LogService from "../../services/LogService";

function Log() {
    componentDidMount()
    return (
        <div>Testing</div>
    )
}

function componentDidMount() {
    const options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({})
    };

    const logs = LogService.get("{}")

    console.log(logs)

    // fetch('htt/his.setState({}))
}
export default Log;