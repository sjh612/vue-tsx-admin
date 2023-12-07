import { queryMyTeamList, type TeamItem } from '@/api/user'
import { Avatar, Card, List } from '@arco-design/web-vue'
import axios from 'axios'
import { defineComponent, ref } from 'vue'
import { useI18n } from 'vue-i18n'
export default defineComponent({
  setup() {
    const { t } = useI18n()
    const dataSource = ref<TeamItem[]>([])
    const defaultValue: any[] = new Array(4).fill({})
    // const { loading, response: teamList } = useRequest<MyTeamRecord[]>(
    //   queryMyTeamList,
    //   defaultValue
    // )
    const fetchData = () => {
      queryMyTeamList().then((res) => {
        console.log('res: ', res)
        dataSource.value = res.data
      })
    }
    fetchData()
    return () => (
      <Card class="general-card" title={t('userInfo.tab.title.team')}>
        <List bordered={false}>
          {dataSource.value.map((item) => (
            <List.Item>
              <List.Item.Meta title={item.name} description={`共${item.peopleNumber}人`}>
                {{
                  avatar: () => (
                    <Avatar shape="circle">
                      <img alt="avatar" src={item.avatar} />
                    </Avatar>
                  )
                }}
              </List.Item.Meta>
            </List.Item>
          ))}
        </List>
      </Card>
    )
  }
})
