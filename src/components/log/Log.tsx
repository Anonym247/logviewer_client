// import LogService from "../../services/LogService";
import { Grid, GridColumn } from "@progress/kendo-react-grid";
import '@progress/kendo-theme-material/dist/all.css';
import { useState } from "react";
import { process } from "@progress/kendo-data-query";

const boolCell = (props: any) => {

    return (
        <td>{props.dataItem[props.field] ? "✔️" : "❌"}</td>
    )
}

const Log = () => {
    const data = [
        {
            id: 1,
            name: "Shamil",
            surname: "Mardanzada",
            zone: "Kurdemir",
            boolean: true
        },
        {
            id: 2,
            name: "Hikmat",
            surname: "Huseynov",
            zone: "NMR",
            boolean: false
        },
        {
            id: 3,
            name: "Mahmud",
            surname: "Rzali",
            zone: "NMR",
            boolean: true
        },
        {
            id: 4,
            name: "Karınca",
            surname: "Diklafozu",
            zone: "Turkey",
            boolean: false
        },
        {
            id: 5,
            name: "Qurban",
            surname: "Qurbanov",
            zone: "Qax",
            boolean: true
        },
        {
            id: 6,
            name: "Sirtush",
            surname: "Goycemenli",
            zone: "Goycemen",
            boolean: false
        },
        {
            id: 7,
            name: "Qara",
            surname: "Qarayev",
            zone: "Q.Qarayev m/st.",
            boolean: true
        },
        {
            id: 8,
            name: "Mahir",
            surname: "Ay brat",
            zone: "Ay",
            boolean: false
        }
    ]

    const [dataState, setDataState] = useState<any>({ skip: 0, take: 4 })
    const [result, setResult] = useState<any>(process(data, dataState))

    const onDataStateChange = (event: any) => {
        setDataState(event.dataState);
        setResult(process(data, event.dataState))
    }


    return (
        <Grid
            data={result}
            pageable={true}
            total={data.length}
            filterable={true}
            onDataStateChange={onDataStateChange}
            {...dataState}
        >
            <GridColumn field="id" title="Id" />
            <GridColumn field="name" title="Name" />
            <GridColumn field="surname" title="Surname" />
            <GridColumn field="zone" title="Zone" />
            <GridColumn field="boolean" title="Boolean" cell={boolCell} />
        </Grid>
    )
}

export default Log;

// function Log() {
//     componentDidMount()
//     return (
//         <div>Testing</div>
//     )
// }

// function componentDidMount() {
//     const options = {
//         method: 'POST',
//         headers: {'Content-Type': 'application/json'},
//         body: JSON.stringify({})
//     };

//     const logs = LogService.get("{}")

//     console.log(logs)

//     // fetch('htt/his.setState({}))
// }
// export default Log;