import { Outlet } from "react-router-dom";
import "./App.css";
import Layout from "./layouts/Layout";
import {useState} from "react";

function App() {
	// const [nama,setNama] = useState("")
	// const [namaSementara, setNamaSementara] = useState("")

	// const gantiNama = (e) =>{
	// 	setNamaSementara(e.target.value)
	// }

	// const gantiSekarang = () =>{
    //     setNama(namaSementara)
    // }

	// const [nilai,setNilai] = useState(0)


	return (
		<div>
			{/* <h1>Halo {nama}</h1>
			<input type="text" value={namaSementara} onChange={gantiNama} />
			<button onClick={gantiSekarang}>Ganti</button>

			<h1>Nilai {nilai}</h1>
			<button onClick={()=> setNilai(nilai+1)}>Tambah</button>
			<button onClick={()=> setNilai(nilai-1)}>Kurang</button> */}

			<Layout>
				<Outlet />
			</Layout>

			

			{/* <h1>halo</h1> */}
		</div>
	);
}

export default App;
