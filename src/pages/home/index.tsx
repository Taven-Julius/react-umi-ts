import { useEffect, useState } from 'react';
import { Space, Table, Button } from 'antd';
import './index.module.less'

import { getTest } from '@/api/index'

const columns = [
  {
    title: 'id',
    dataIndex: 'id',
  },
  {
    title: '标题',
    dataIndex: 'title',
  },
  {
    title: '描述',
    dataIndex: 'desction',
  },
  {
    title: '操作',
    render: () => (
      <Space size="middle">
        <a>编辑 </a>
        <a>删除 </a>
      </Space>
    ),
  },
];

const Home = () => {
  const [tableData, setTableData] = useState([])
  const firstRequest = async () => {
    const res = await getTest()
    setTableData(res.data)
  }

  useEffect(() => {
    firstRequest()
  }, [])



  return (
    <div>
      <div className="header">
        <Button type="primary">新增</Button>
      </div>
      <Table rowKey="id" columns={columns} dataSource={tableData} />
    </div>
  )
}



export default Home;