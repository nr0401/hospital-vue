<template>
  <!-- 药房管理 -->
  <div class="my-5">
    <el-row>
      <el-col :span="22" :offset="1">
        <el-card shadow="always" :body-style="{ padding: '20px' }">
          <h5>药品信息</h5>
          <el-table :data="druglist" style="width: 100%" height="530">
            <el-table-column prop="title" label="药品名称" width="150">
            </el-table-column>
            <el-table-column prop="druptype_id" label="药品编号" width="150">
            </el-table-column>
            <el-table-column prop="total" label="药品价格" width="150">
            </el-table-column>
            <el-table-column prop="text" label="药品说明" width="400">
            </el-table-column>
            <el-table-column prop="count" label="药品余量" width="100">
            </el-table-column>
            <el-table-column fixed="right" label="操作" width="100">
              <template slot-scope="scope">
                <el-button
                  @click="deleteRow(scope.$index, tableData)"
                  type="primary"
                  plain
                  size="small"
                >
                  编辑
                </el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-card>
        <!-- 分页 -->
        <div class="block mb-4">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="Page"
            :page-sizes="[20, 50, 100, 200]"
            :page-size="20"
            layout="total, sizes, prev, pager, next, jumper"
            :total="500"
            style="text-align: center"
            class="mt-3"
          >
          </el-pagination>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
    data() {
        return {
            druglist:[{
                title:'西药',
                druptype_id:'1',
                total:'123',
                text:'湖南琳信科技有限责任公司（以下简称：琳信科技），创立于2019年，是国内专业互联网解决方案提供商，专注于移动互联网技术开发和产品运营。 琳信科技作为国内高端专业互联网解决方案提供商，提供高端APP定制开发、商城/企业网站定制、微信公众号开发、小程序开发、高品质网站设计、以及各行业解决方案等服务。 '

            }
            ]
        }
    },

};
</script>