import { Loading } from "element-ui";

let loadingCount = 0,
    loading;

const startLoading = () => {
        loading = Loading.service({
            lock: true,
            text: "加载中……",
            background: "rgb(255, 255, 255)"
        });
    },

    endLoading = () => {
        loading.close();
    };

export  const showLoading = () => {
    if (loadingCount === 0) {
        startLoading();
    }
    loadingCount += 1;
};

export const hideLoading = () => {
    if (loadingCount <= 0) {
        return;
    }
    loadingCount -= 1;
    if (loadingCount === 0) {
        endLoading();
    }
};