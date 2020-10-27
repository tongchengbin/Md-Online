<template>
  <el-dialog class="picture_bed" width="520px" size="mini" title="图床" :visible.sync="visible">

    <div>
      <el-tabs type="border-card">
        <el-tab-pane label="阿里云">
          <el-form class="pic" style="padding: 0;" label-position="right" size="mini" inline label-width="130px">
              <el-form-item label="Bucket">
                <el-input v-model="pictureBed.Bucked" ></el-input>
              </el-form-item>
            <el-form-item label="Region">
              <el-input v-model="pictureBed.Region" ></el-input>
            </el-form-item>
            <el-form-item label="AccessKey Id">
              <el-input v-model="pictureBed.AccessKeyId" ></el-input>
            </el-form-item>
            <el-form-item label="accessKey Secret">
              <el-input v-model="pictureBed.accessKeySecret" ></el-input>
            </el-form-item>
          </el-form>
        </el-tab-pane>
      </el-tabs>
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

export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    visible:{
      type:Boolean,
      default:true
    }
  },
  data(){
    return {
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
    dialogFormVisible(e){

      if(e){
        if (!(this.pictureBed.AccessKeyId &&
            this.pictureBed.Bucked && this.pictureBed.Region
            && this.pictureBed.accessKeySecret)){
          return
        }
        let config = {
          "type":IMAGE_HOSTING_NAMES.aliyun,
          "config":this.pictureBed
        }
        setCookie("bedConfig",JSON.stringify(config))
        this.$emit('change',1)
      //  提交
      }else{
        setCookie("bed",)
        this.$emit('change',0)
      }
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
