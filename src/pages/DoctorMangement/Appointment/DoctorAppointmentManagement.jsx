import React from 'react';
import { Button, Table } from 'antd';
import Column from 'antd/es/table/Column';
import { Select } from 'antd';
import { Link } from 'react-router-dom';
import { CSVLink } from 'react-csv';
import { ExportOutlined } from '@ant-design/icons';

const DoctorAppointmentManagement = () => {
    const data = [
        {
            key: '1',
            appointmentCode: 'APPT001',
            patientName: 'John Doe',
            phoneNumber: '1234567890',
            totalCheck: 500000,
            appointmentDate: '2024-06-06',
            status: 1,
        },
        {
            key: '2',
            appointmentCode: 'APPT002',
            patientName: 'Jane Doe',
            phoneNumber: '0987654321',
            totalCheck: 600000,
            appointmentDate: '2024-06-07',
            status: 2,
        },
        // Thêm các dòng dữ liệu khác nếu cần
    ];

    return (
        <>
            <div
                className="action"
                style={{
                    display: "flex",
                    justifyContent: "flex-end"
                }}
            >
                <CSVLink
                    data={data}
                    headers={[
                        { label: "Appointment Code", key: "appointmentCode" },
                        { label: "Patient Name", key: "patientName" },
                        { label: "Phone Number", key: "phoneNumber" },
                        { label: "Appointment Value", key: "totalCheck" },
                        { label: "Payment Amount", key: "totalCheck" },
                        { label: "Appointment Date", key: "appointmentDate" },
                        { label: "Status", key: "status" }
                    ]}
                    style={{
                        border: "1px solid #007bff",
                        padding: "7px 15px",
                        borderRadius: '7px'
                    }}
                >
                    Export
                </CSVLink>
            </div>
            <hr />
            <Table dataSource={data}>
                <Column 
                    title="Appointment Code" 
                    dataIndex="appointmentCode" 
                    key="appointmentCode" 
                    render={(appointmentCode) => (<><Link to={appointmentCode}>{appointmentCode}</Link></>)}
                />
                <Column 
                    title="Patient Name" 
                    dataIndex="patientName" 
                    key="patientName" 
                />
                <Column 
                    title="Phone Number" 
                    dataIndex="phoneNumber" 
                    key="phoneNumber" 
                />
                <Column 
                    title="Appointment Value" 
                    dataIndex="totalCheck" 
                    key="totalCheck" 
                    render={(appointmentCost) => (<>{appointmentCost.toLocaleString('vi-VN', {style: 'currency',currency: 'VND'})}</>)}
                />
                <Column 
                    title="Payment Amount" 
                    dataIndex="totalCheck" 
                    key="totalCheck" 
                    render={(appointmentCost) => (<>{(appointmentCost-30000).toLocaleString('vi-VN', {style: 'currency',currency: 'VND'})}</>)}
                />
                <Column 
                    title="Appointment Date" 
                    dataIndex="appointmentDate" 
                    key="appointmentDate" 
                />
                <Column 
                    title="Status" 
                    dataIndex="status" 
                    key="status" 
                    render={(statusAppointment, key) => (
                        <>
                            <Select defaultValue={(statusAppointment).toString()} style={{ width: 200 }} onChange={() => {}}>
                                <Select.Option value="0">Pending Confirmation</Select.Option>
                                <Select.Option value="1">Confirmed</Select.Option>
                                <Select.Option value="2">In Progress</Select.Option>
                                <Select.Option value="3">Completed</Select.Option>
                                <Select.Option value="4">Cancelled</Select.Option>
                            </Select>
                        </>
                    )}
                />
            </Table >
        </>
    );
};

export default DoctorAppointmentManagement;
