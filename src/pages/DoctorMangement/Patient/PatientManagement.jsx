import { Button, Popconfirm, Table, message } from 'antd';
import { NavLink, Link } from 'react-router-dom';
import Column from 'antd/es/table/Column';
import PageTitle from '../../../components/common/PageTitle'
const PatientManagement = () => {
    const patientList = [
    {
        _id: 1,
        patient_name: "Patient 1",
        patient_age: 30,
        patient_gender: "Male",
        patient_status: "Stable"
    },
    {
        _id: 2,
        patient_name: "Patient 2",
        patient_age: 45,
        patient_gender: "Female",
        patient_status: "Critical"
    },
    // Add more patient objects as needed
];
 // Placeholder for list of patients

    const removePatient = (key) => {
        // Placeholder for removing patient logic
        message.success("Patient deleted successfully!");
    };

    return (
        <>
                  <PageTitle title="Patient List" subtitle="My Patients" md="12" className="ml-sm-auto mr-sm-auto" />

            <Link style={{ color: 'white' }} to={'/doctor-dashboard/patients/new'}>
                <Button type="primary" style={{ margin: '-40px 1200px 10px 0' }}>Add New</Button>
            </Link>

            <Table
                dataSource={patientList.map((item, index) => ({
                    id: item._id,
                    key: index,
                    patient_name: item.patient_name,
                    patient_age: item.patient_age,
                    patient_gender: item.patient_gender,
                    patient_status: item.patient_status,
                    patient: item
                }))}
            >
                <Column className='col-1' title="ID" dataIndex="key" key="key" />
                <Column
                    className='col-3'
                    title="Name"
                    dataIndex="patient"
                    key="patient"
                    render={(patient) => (<><NavLink to={`/patients/${patient._id}`} >{patient.patient_name}</NavLink></>)}
                />
                <Column
                    className='col-1'
                    title="Age"
                    dataIndex="patient_age"
                    key="patient_age"
                />
                <Column
                    className='col-1'
                    title="Gender"
                    dataIndex="patient_gender"
                    key="patient_gender"
                />
                <Column
                    className='col-2'
                    title="Status"
                    dataIndex="patient_status"
                    key="patient_status"
                />
                <Column
                    title="Action"
                    key="action"
                    className='col-2'
                    render={(patient) => {
                        return (
                            <Popconfirm
                                placement="top"
                                title="Are you sure you want to delete this patient?"
                                onConfirm={() => removePatient(patient.id)}
                                okText="Yes"
                                cancelText="No"
                            >
                                <Button type="primary" style={{ margin: '0 5px' }} danger>
                                    Delete
                                </Button>
                                <Link style={{ color: 'white' }} to={`/admin/patients/update/${patient.id}`}>
                                    <Button type="primary" style={{ backgroundColor: 'green' }}>Update</Button>
                                </Link>
                            </Popconfirm>
                        );
                    }}
                ></Column>
            </Table >
        </>
    );
};

export default PatientManagement;
