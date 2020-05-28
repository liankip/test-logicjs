<template>
  <div class="container">
    <el-header>
      <h1>Article Nuxt</h1>
    </el-header>

    <el-main>
      <el-form ref="form" :model="form" label-width="120px" :rules="rules">
        <el-form-item label="Title" prop="title">
          <el-input v-model="form.title" type="text" />
        </el-form-item>
        <el-form-item label="Description" prop="description">
          <el-input v-model="form.description" type="textarea"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="addPost('form')">Save</el-button>
          <el-button @click="resetForm('form')">Cancel</el-button>
        </el-form-item>
      </el-form>

      <el-card v-if="!articles.length" class="box-card">
        <div>No Article</div>
      </el-card>
      <el-card
        v-for="(article, index) in articles.slice().reverse()"
        :index="index"
        :key="article.id"
        class="box-card"
      >
        <div slot="header" class="clearfix">
          <span>
            <b>{{ article.title }}</b>
          </span>
          <el-button
            type="danger"
            icon="el-icon-delete"
            @click="removePost(article)"
            style="float: right; padding: 8px"
          ></el-button>
        </div>

        <div class="text item">
          <p>{{ article.description }}</p>
          <span>
            <b>Vote : {{ article.vote }}</b>
          </span>
        </div>
        <div class="text item">
          <el-button size="small" icon="el-icon-arrow-up" @click="upVote(article)" circle></el-button>
          <el-button size="small" icon="el-icon-arrow-down" @click="downVote(article)" circle></el-button>
        </div>
        <div class="text item">
          <span>
            Posted by
            <b>Anonymous</b>
          </span>
        </div>
      </el-card>
    </el-main>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  data: function() {
    return {
      form: {
        title: '',
        description: ''
      },
      rules: {
        title: {
          required: true,
          message: 'Judul harus diisi',
          trigger: 'blur'
        },
        description: {
          required: true,
          message: 'Kontent harus diisi',
          trigger: 'blur'
        }
      },
      isHidden: true
    }
  },
  computed: mapState(['articles']),
  created() {
    this.$store.dispatch('getPost')
  },

  methods: {
    genId() {
      return Math.random()
        .toString()
        .substr(2, 10)
    },

    addPost(form) {
      this.$refs[form].validate(valid => {
        if (valid) {
          this.$store.dispatch('submitPost', {
            id: this.genId(),
            title: this.form.title,
            description: this.form.description,
            vote: 0
          })
        } else {
          return false
        }
      })
      this.$refs[form].resetFields()
    },

    /* Update / Vote Article */
    upVote(article) {
      this.$store.dispatch('voteUp', article)
    },

    downVote(article) {
      this.$store.dispatch('voteDown', article)
    },

    /* Delete Article */
    removePost(article) {
      this.$store.dispatch('removePost', article)
    },

    resetForm(formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style>
.hidden {
  display: none;
}

.box-card {
  margin-bottom: 20px;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: '';
}
.clearfix:after {
  clear: both;
}
</style>
