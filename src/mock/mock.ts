import Mock from 'mockjs'

import '@/mock/detailMock'
import '@/mock/userMock'

import '@/mock/dashboardMock'
import '@/mock/visualizationMock'
import '@/mock/listMock'
import '@/mock/messageMock'
import '@/mock/formMock'
Mock.setup({
  timeout: '600-1000'
})
