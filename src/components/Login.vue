<template>
  <el-dialog @close="closeDialog" :close-on-click-modal="false" class="picture_bed" width="450px" size="mini" title="登录" :visible.sync="show">
    <div>
      <el-form size="small" inline label-position="right" label-width="60px">
        <el-form-item label="用户名">
          <el-input v-model="username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="password"></el-input>
        </el-form-item>
      </el-form>
    </div>
    <div slot="footer" class="dialog-footer">
      <el-button size="small" @click="dialogFormVisible(false)">取 消</el-button>
      <el-button size="small" type="primary" @click="dialogFormVisible(true)">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
import {getCookie, removeCookie, setCookie} from "@/utils/cookie";
import {IMAGE_HOSTING_NAMES} from "@/utils/constant";
import axios from 'axios'
import Message from "element-ui/packages/message/src/main";
export default {
  name: 'Login',
  props: {
  },
  data(){
    return {
      show:true,
      username:'',
      password:'',
      pictureBed:{
        Bucked:'',
        Region:'',
        AccessKeyId:'',
        accessKeySecret:''
      }
    }
  },
  created() {
    let bedConfig = getCookie('bedConfig')
    if(bedConfig){
      try {
        const config = JSON.parse(bedConfig)
        this.pictureBed = config.config
        console.log("get",this.pictureBed)
      }catch (err){
        console.log(err)
        removeCookie('bedConfig')
      }
    }
  },
  methods:{
    closeDialog(done){
      console.log(done)
      this.$emit('closeLogin')
    },
    dialogFormVisible(e){
      if(!e){
        this.$emit('closeLogin')
        return
      }
      let username = this.username
      let password = this.password
      axios.post('http://api.tongchengbin.com/api/md_online/',{
        username,password
      }).then(res=>{
        let config = {
          "type":IMAGE_HOSTING_NAMES.aliyun,
          "config":res.data.config
        }
        setCookie('username',res.data.username)
        setCookie("bedConfig",JSON.stringify(config))
        this.$emit('closeLogin')
      }).catch(err=>{
        Message.error(err.response.data.msg)
      })
    },
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.pic >>>   .el-form-item__content{
  width: 280px;
  text-align: left;

}
.picture_bed >>> .el-dialog__header{
  padding-bottom: 0;
}
.picture_bed >>> .el-dialog__body{
  padding: 10px 20px;
}
.picture_bed >>> .el-tabs--border-card{
  box-shadow:none!important;
  border:none!important;
}
/*.picture_bed >>> .el-tabs__header{*/
/*  background:none;*/

/*}*/
</style>
