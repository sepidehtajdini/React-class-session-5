import "./5-1.css";
import Table from 'react-bootstrap/Table';
function TableOfContents() {
    return (
        <div className="mid">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Nationality</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Jodie Foster</td>
                        <td>60</td>
                        <td>American</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Anthony Hopkins</td>
                        <td>85</td>
                        <td>Welsh</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Scott Glenn</td>
                        <td>83</td>
                        <td>American</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Ted Levine</td>
                        <td>65</td>
                        <td>American</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}
export default TableOfContents