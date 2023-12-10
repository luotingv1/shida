/**
 *  路由权限相关管理
 * */

import router from '@/router'
import NProgress from 'nprogress' // 进度条
import 'nprogress/nprogress.css' // 进度条样式
import userModel from "@/libs/userModel";


// token=acl%2fxzfvxHFe45JQ5VUzP5%2b%2bx%2fUlFVUTutdH2KYgRJO5U08Z7%2fpL0nXnqvIyTlrdqgefiCmjsBUmT2LKLTOwDcOkuo47C5YXIS44BcEgSA%2fqU%2fI4KkZWTbYjUao5o%2fmHzp6Fe8gEOCkrVG85EcghGj%2bSO%2btiUq9CzgWrq1z8GAuOAMbglGBS02E%2fiT0Pchip4kyISDpjO6AO%2fH89Adu%2bHCy6rP%2f83ACzr2WZbhKhikIDjadNDvA0MnjBd84%2fSMHRDGofi4FzXVjHBwBJUrt3Rzv0yte2C0b6F1aPO5ISh5l1dLvs4cC4jluIfq2Hp2KjEovvwHx8WiPDKQgEKoq3YB%2f5Vovh88BQxLLFZjo3PRy4G9MUQ%2fORIxdzwIibjnD7UXQ1wEOSGfqVDEL21%2f1UiMOXhC1CdRPbt9vQf4K0pnK53Ll2ymSXRmltXdS0yf6yHvdRQQ2MSDxwhc%2bqmyR13wZ6gAqeMuuAgwd4CNTpWWYl%2bLcfGAuA9MTPtj16fvTBjU8D%2bw5FKm7nFZvLjkOZPbPkIU6lhNJPBR5gpVbjAZPco4pc4F1jiOlvR%2fVH%2ffmCADhuyON4qr%2bw5WITLj6hcA%3d%3d
router.beforeEach(async (to, from, next) => {
	NProgress.start()
	if (to.query && to.query.token) {
		//存在考试平台token 去解析 获取跨境token
		userModel.threelogin(to.query.token).then(res=>{
			userModel.signIn({username:res.name}).then(()=>{
				next('/')
			})
		}).catch((err)=>{
			console.log(err);
			next('/login')
		})
	}
	// 用户登录状态拦截
	let loginStatus = await userModel.checkLoginState();
	if (!loginStatus) {
		if(to.name!='Login'){
			//没登录 那就去登录页
			userModel.goLogin();
			return false;
		}else{
			next()
		}
	}else{
		//已经登陆了 拒绝去重新登陆 
		if(to.name=='Login'){
			next(false)
			NProgress.done()
			return false
		}else{
			next()
		}
	}

})

router.afterEach(() => {
	NProgress.done() // 结束Progress
})

