<template>
  <div class="container">
    <div class="top_menu">
      <div class="left_menu">
        <section class="menu_title">Markdown Online</section>
        <el-dropdown :class="openMenu===0 ? 'menu_open':'' " @visible-change="(value)=> visibleChange(0, value)" placement="top-start" size="mini" class="menu_link" trigger="click">
          <span class="el-dropdown-link" >文件</span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item size="mini" @click.native="exportMarkdown">导出 Markdown</el-dropdown-item>
            <el-dropdown-item>导入</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <el-dropdown :class="openMenu===1 ? 'menu_open':'' " @visible-change="(value)=> visibleChange(1, value)" placement="top-start" size="mini"  class="menu_link" trigger="click">
          <span class="el-dropdown-link" >代码主题</span>
          <el-dropdown-menu tabindex="1" style="top: 20px!important;"  slot="dropdown">
            <el-dropdown-item @click.native="selectTheme(item)" :key="item.label" v-for="item in themeList ">{{item.label}}</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <el-dropdown :class="openMenu===2 ? 'menu_open':'' " @visible-change="(value)=> visibleChange(2, value)" placement="top-start" size="mini"  class="menu_link" trigger="click">
          <span class="el-dropdown-link" >图床</span>
          <el-dropdown-menu tabindex="2" style="top: 20px!important;"  slot="dropdown">
            <el-dropdown-item @click.native="openCloud">设置图床</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <div class="right_menu">
<<<<<<< HEAD
<!--        <span class="btn_user menu_link">-->
<!--          登录-->
<!--        </span>-->
=======
        <el-dropdown-item @click.native="openLogin">{{ loginTitle }}</el-dropdown-item>
>>>>>>> b86a53c149edc4b1cacbea1387916112fddb8487
      </div>
    </div>
    <div class="content">
      <div style="height: 100%;background-color: #42b983;width: 100%">
              <mavon-editor :ishljs = "true" ref="md" @imgAdd="handleEditorImgAdd"
                            @imgDel="handleEditorImgDel"
                            style="height:100%;"
                            v-model="content"
                            :externalLink="externalLink"
                />
      </div>

    </div>
    <picture-bed v-if="editBed" @change="pictureBedEvent"></picture-bed>
<<<<<<< HEAD
=======
    <login v-if="showLogin" @closeLogin="closeLogin"></login>
>>>>>>> b86a53c149edc4b1cacbea1387916112fddb8487
  </div>
</template>

<script>
import hljs from 'highlight.js'
import 'mavon-editor/dist/css/index.css';
import {dateFormat, download} from "@/utils/helper";
import {EXPORT_FILENAME_SUFFIX} from "@/utils/constant";
import {uploadAdaptor} from "../utils/imageClound";
import PictureBed from "@/components/PictureBed";
<<<<<<< HEAD
=======
import Login from "@/components/Login";
import {getCookie} from "@/utils/cookie";
>>>>>>> b86a53c149edc4b1cacbea1387916112fddb8487
export default {
name: "Index",
  data(){
  return {
<<<<<<< HEAD
=======
    loginTitle:"登录",
    showLogin:false,
>>>>>>> b86a53c149edc4b1cacbea1387916112fddb8487
    editBed:false,
    openMenu:-1,
    currentThemeSrc:"https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.1/styles/github.min.css",
    themeList:[{
      "label":"Github",
      "src":'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.1/styles/github.min.css'
    },
      {
        "label":"An Old Hope",
        "src":"https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.1/styles/an-old-hope.min.css"
      },
      {
        "label":"Atelier Dune Dark",
        "src":"https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.1/styles/atelier-dune-dark.min.css"
      },
      {
        "label":"Atelier Dune Light",
        "src":"https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.1/styles/atelier-dune-light.min.css"
      },
    ],
    content:'',
    externalLink:{
      markdown_css: function() {
        // 这是你的markdown css文件路径
        return this.currentThemeSrc;
      },
    }
  }
  },
<<<<<<< HEAD
=======
  created() {
    this.loginTitle = getCookie('username') || '登录'
  },
>>>>>>> b86a53c149edc4b1cacbea1387916112fddb8487
  methods:{
    handleEditorImgAdd(pos,$file){
      uploadAdaptor({file:$file,onSuccess:(res)=>{
        this.$refs.md.$img2Url(pos,res.url)
        }}
        )
    },
    handleEditorImgDel(){
      console.log('handleEditorImgDel');
    },
    exportMarkdown(){
      download(this.content,dateFormat(new Date(), "yyyy-MM-dd") + EXPORT_FILENAME_SUFFIX)
    },
    selectTheme(theme){
      this.currentThemeSrc = theme.src;
      let css = document.createElement('link');
      css.href = this.currentThemeSrc;
      css.rel = 'stylesheet';
      css.type = 'text/css';
      document.head.appendChild(css);

      hljs.initHighlighting()
    },
    visibleChange(tabindex,e){
      if(e){
        this.openMenu=tabindex
      }else{
        this.openMenu=-1
      }

    },
    openCloud(){
    //  设置图床
      this.editBed = true
    },
    pictureBedEvent(){
      this.editBed = false
<<<<<<< HEAD
=======
    },
    openLogin(){
      this.showLogin = true
    },
    closeLogin(){
      this.showLogin = false
>>>>>>> b86a53c149edc4b1cacbea1387916112fddb8487
    }

  },
  components:{
<<<<<<< HEAD
  PictureBed
=======
  PictureBed,Login
>>>>>>> b86a53c149edc4b1cacbea1387916112fddb8487
  },
  mounted(){
    hljs.initHighlighting()
  }
}
</script>

<style scoped>
.container{
  height: 100vh;
  width: 100%;
  overflow: hidden;
}
.top_menu{
  height: 30px;
  flex: 1;
  position: relative;
  box-shadow: 0 4px 10px rgba(0,0,0,.05);
  z-index: 2;
  background: #fff;
  display: flex;
  align-items: center;
}
.left_menu{
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: flex-start;
}
.right_menu{
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.btn_user{
  padding-right: 30px;
  height: 20px;
}
.content{
  background-color: #42b983;
  height: calc(100vh - 50px);
  width: 100%;
}
.menu_title{
  line-height: 1!important;
  padding: 0 10px 0 20px;
  font-weight: 700;
  font-size: 16px;
  font-family: Optima-Regular,Optima,PingFangSC-light,PingFangTC-light,PingFang SC,Cambria,Cochin,Georgia,Times,Times New Roman,serif;
}
.menu_link{
  line-height: 1!important;
  text-decoration: none;
  background-color: initial;
  outline: none;
  cursor: pointer;
  -webkit-transition: color .3s;
  transition: color .3s;
  color: #333;
  font-size: 14px;
  padding: 8px 10px;
}
.content >>> .v-note-edit{
  background-color: #42b983;
}
.content >>> .content-input-wrapper{
  background-color: #42b983!important;
}
.content >>> .content-input{
  background-color: #42b983!important;
}
.content >>> textarea{
  background-color: #42b983!important;
}
.container >>> .el-popper{
  margin-top: 0!important;
}
.menu_open{
  background-color: #42b983;
}

</style>

<style>
  .el-popper{
    margin-top: 0!important;
  }
  .el-dropdown:focus {
    background-color: #42b983;
    outline: 0;
  }
  .popper__arrow{
    display: none!important;
  }
  .el-dropdown-menu{
    border-radius: 0!important;
    border: none!important;
  }
</style>
