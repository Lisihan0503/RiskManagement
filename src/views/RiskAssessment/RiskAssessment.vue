<template>
    <!--    管理问卷-->
    <div class="RiskAssessment">
        <div class="ui_management_evaluation_plan">
            <div class="ui_search_result ui_rating">
                <el-row style="background: #fafafa;">
                    <el-col :span="24">
                        <span></span>管理问卷
                    </el-col>
                </el-row>
            </div>
        </div>

        <div class="RiskAssessment_cont">
            <!--    筛选-->
            <div class="ui_searchCon">
                <el-row>
                    <el-col :span="24">
                        <div class="fn-left ui_search_label">
                            筛选方式：
                        </div>
                        <div class="fn-left">
                            <div class="fn-left ui_search_select">
                                <el-select v-model="value" placeholder="评估单元名称">
                                    <el-option
                                            v-for="item in options"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                    </el-option>
                                </el-select>
                            </div>
                            <div class="fn-left ui_search_select">
                                <el-select v-model="value" placeholder="所属机构">
                                    <el-option
                                            v-for="item in options"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                    </el-option>
                                </el-select>
                            </div>
                            <div class="fn-left ui_search_select">
                                <el-select v-model="value" placeholder="所属国家">
                                    <el-option
                                            v-for="item in options"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                    </el-option>
                                </el-select>
                            </div>
                            <div class="fn-left ui_search_select">
                                <el-date-picker
                                        v-model="endDate"
                                        type="date"
                                        placeholder="截至日期"
                                        :picker-options="pickerOptions"
                                        style="width:100%;">
                                </el-date-picker>
                            </div>
                            <div class="fn-left ui_search_select">
                                <el-select v-model="value" placeholder="状态">
                                    <el-option
                                            v-for="item in options"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                    </el-option>
                                </el-select>
                            </div>
                        </div>
                        <div class="fn-left ui_search_btn">
                            <el-button>查询</el-button>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </div>

        <!--    搜索结果-->
        <div class="ui_search_result">
            <el-row>
                <el-col :span="24">
                    <span></span>搜索结果
                </el-col>
            </el-row>
        </div>

        <!--    表格-->
        <div class="ui_table_box">
            <el-table
                    :data="tableData"
                    :header-cell-style="{background:'#f5f6f8',height:'45px'}"
                    stripe
                    @sort-change="tableSort"
                    style="width: 100%">
                <el-table-column
                        fixed
                        prop="name"
                        label="评估单元名称"
                        sortable="custom"
                        :show-overflow-tooltip='true'
                        width="300">
                </el-table-column>
                <el-table-column
                        prop="unit"
                        :show-overflow-tooltip='true'
                        label="所属机构（单元）"
                        width="300">
                </el-table-column>
                <el-table-column
                        prop="country"
                        label="所属机构（国家）"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="date"
                        label="截至日期"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="status"
                        label="状态"
                        width="180">
                </el-table-column>
                <el-table-column
                        fixed="right"
                        label="操作"
                        width="400">
                    <template slot-scope="scope">
                        <el-button type="text">查看问卷结果</el-button>
                        <el-button type="text">查看子问卷</el-button>
                        <el-button type="text">查看审计痕迹</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <!--    分页-->
        <div class="ui_pagination_box">
            <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page.sync="currentPage3"
                    :page-size="100"
                    layout="prev, pager, next, jumper"
                    :total="1000">
            </el-pagination>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'RiskAssessment',
        data() {
            return {
                value: '',
                options: [],
                //截至日期
                endDate: '',
                pickerOptions: {
                    disabledDate(time) {
                        console.log(time)
                        return time.getTime() > Date.now();
                    },
                },
                tableData: [{
                    name: '单元名称010101',
                    unit: '所属机构XXXXXXXXXXXX',
                    country: '中国',
                    date: '2019-12-12',
                    status: '待填报'
                }, {
                    name: '单元名称010101',
                    unit: '所属机构XXXXXXXXXXXX',
                    country: '中国',
                    date: '2019-12-12',
                    status: '待填报'
                }, {
                    name: '单元名称010101',
                    unit: '所属机构XXXXXXXXXXXX',
                    country: '中国',
                    date: '2019-12-12',
                    status: '待填报'
                }, {
                    name: '单元名称010101',
                    unit: '所属机构XXXXXXXXXXXX',
                    country: '中国',
                    date: '2019-12-12',
                    status: '待填报'
                }, {
                    name: '单元名称010101',
                    unit: '所属机构XXXXXXXXXXXX',
                    country: '中国',
                    date: '2019-12-12',
                    status: '待填报'
                }, {
                    name: '单元名称010101',
                    unit: '所属机构XXXXXXXXXXXX',
                    country: '中国',
                    date: '2019-12-12',
                    status: '待填报'
                }, {
                    name: '单元名称010101',
                    unit: '所属机构XXXXXXXXXXXX',
                    country: '中国',
                    date: '2019-12-12',
                    status: '待填报'
                }, {
                    name: '单元名称010101',
                    unit: '所属机构XXXXXXXXXXXX',
                    country: '中国',
                    date: '2019-12-12',
                    status: '待填报'
                }, {
                    name: '单元名称010101',
                    unit: '所属机构XXXXXXXXXXXX',
                    country: '中国',
                    date: '2019-12-12',
                    status: '待填报'
                }, {
                    name: '单元名称010101',
                    unit: '所属机构XXXXXXXXXXXX',
                    country: '中国',
                    date: '2019-12-12',
                    status: '待填报'
                }],
                currentPage3: 1
            }
        },
        components: {},
        mounted() {

        },
        methods: {
            tableSort(column, prop, order) {
                console.log(column, prop, order)
            },
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            }
        }
    }
</script>

<style lang="scss" scoped type="text/scss">
    @import "../../common/style/commonSass/ManagerCommonSass";

    .RiskAssessment {
        margin-top: 50px;

        .RiskAssessment_cont {
            padding: 0 24px;
            border-bottom: 1px solid #f4f4f4;
            /*筛选*/
            .ui_searchCon {
                .ui_search_label {
                    margin: 20px 15px 20px 0;
                    width: 80px;
                    line-height: 40px;
                    color: #ccc;
                    font-size: 16px;
                    font-weight: 400;
                }
                .ui_search_select {
                    width: 160px;
                    margin: 20px 20px 20px 0;
                }

                .ui_search_btn {
                    margin-top: 25px;
                    button {
                        width: 90px;
                        height: 30px;
                        line-height: 30px;
                        padding: 0 0;
                        text-align: center;
                        border-radius: 4px;
                        font-size: 14px;
                        font-weight: 400;
                        color: #fff;
                        border: 1px solid #bf7709;
                        background: #bf7709;
                    }
                }
            }
        }
    }
</style>
