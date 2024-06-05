import { useState } from 'react';
import { Button, Form, Input, Upload, Modal, message, Select, Space, Divider, DatePicker } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import TextArea from 'antd/es/input/TextArea';

const PatientAdd = () => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');
  const [fileList, setFileList] = useState([]);
  const [medicalCondition, setMedicalCondition] = useState('');
  const [allergies, setAllergies] = useState([]);
  const [currentAllergy, setCurrentAllergy] = useState('');

  const getBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  const handleCancel = () => setPreviewOpen(false);

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
    setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
  };

  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);

  const handleDelete = (file) => {
    setFileList((prevList) => prevList.filter((item) => item.uid !== file.uid));
  };

  const onMedicalConditionChange = (event) => {
    setMedicalCondition(event.target.value);
  };

  const addAllergy = (e) => {
    e.preventDefault();
    setAllergies([...allergies, currentAllergy]);
    setCurrentAllergy('');
  };

  const onAllergyChange = (event) => {
    setCurrentAllergy(event.target.value);
  };

  const dummyCategories = [
    { label: "Cardiology", value: "1" },
    { label: "Neurology", value: "2" },
    { label: "Orthopedics", value: "3" }
  ];

  return (
    <div>
      <div className="patient_add">
        <Form
          name="basic"
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 18 }}
          style={{ width: "100%" }}
          initialValues={{ remember: true }}
          autoComplete="off"
        >
          <div className="content" style={{ display: "flex" }}>
            <div className="content_left" style={{ flex: 1, marginRight: "16px" }}>
              <Form.Item
                className='col-12'
                label="Full Name"
                name="patient_name"
                rules={[{ required: true, message: 'Patient name is required!' }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                className='col-12'
                label="Date of Birth"
                name="patient_dob"
                rules={[{ required: true, message: 'Date of birth is required!' }]}
              >
                <DatePicker style={{ width: '100%' }} />
              </Form.Item>

              <Form.Item
                className='col-12'
                label="Medical Condition"
                name="patient_medical_condition"
              >
                <Input placeholder="Medical Condition" value={medicalCondition} onChange={onMedicalConditionChange} />
              </Form.Item>

              {/* ALLERGIES */}
              <Form.Item className='col-12' label="Allergies:" name="patient_allergies">
                <Space style={{ display: "flex", alignItems: "center" }}>
                  <Input placeholder="Add allergy" value={currentAllergy} onChange={onAllergyChange} />
                  <Button type="text" icon={<PlusOutlined />} onClick={addAllergy}>Add</Button>
                </Space>
              </Form.Item>
              <Form.Item className='col-12' label="List of Allergies:">
                {allergies.map((item, index) => (
                  <div className='col-12' style={{ display: 'flex' }} key={index}>{item}</div>
                ))}
              </Form.Item>

              {/* IMAGE */}
              <Form.Item className='col-12' label="Image" name="patient_image">
                <Upload
                  listType="picture-card"
                  onPreview={handlePreview}
                  onChange={handleChange}
                  onRemove={(file) => handleDelete(file)}
                >
                  {fileList.length >= 8 ? null : <div><PlusOutlined /><div style={{ marginTop: 8 }}>Upload</div></div>}
                </Upload>
                <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
                  <img alt="example" style={{ width: '100%' }} src={previewImage} />
                </Modal>
              </Form.Item>
            </div>

            <div className="content_right" style={{ flex: 1 }}>
              {/* CATEGORY */}
              <Form.Item
                className='col-12'
                label="Category"
                name="category"
                rules={[{ required: true, message: 'Category is required!' }]}
              >
                <Select
                  style={{ width: "100%" }}
                  placeholder="Select category"
                  dropdownRender={(menu) => (
                    <>
                      {menu}
                      <Divider style={{ margin: '8px 0' }} />
                      <Space style={{ padding: '0 8px 4px' }}>
                        <Input placeholder="New category" value={medicalCondition} onChange={onMedicalConditionChange} />
                        <Button type="text" icon={<PlusOutlined />} >Add</Button>
                      </Space>
                    </>
                  )}
                  options={dummyCategories}
                />
              </Form.Item>
            </div>
          </div>

          {/* DESCRIPTION */}
          <Form.Item
            label="Description:"
            className='col-12'
            labelCol={{ span: 2 }}
            wrapperCol={{ span: 22 }}
            name="patient_desc"
            rules={[{ required: true, message: 'Description cannot be empty' }]}
            style={{
              marginTop: "1vw"
            }}
          >
            <TextArea rows={10} placeholder="Description content" />
          </Form.Item>

          {/* SAVE */}
          <Form.Item className='col-12' wrapperCol={{ offset: 2, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Save
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default PatientAdd;
