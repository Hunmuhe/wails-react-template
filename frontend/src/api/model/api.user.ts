import service from '../server'

// 登录
export const apiNewUser = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("操作成功！")
        }, 500);
    });
}