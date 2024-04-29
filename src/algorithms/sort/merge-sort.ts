import { Comparable } from "../../@types/types";

export const mergeSort = (list: Comparable[]) : Comparable[] =>{
    const helper = (lst:Comparable[], lo:number , hi:number):Comparable[] =>{
        if(lo === hi) return [lst[lo]]
        let mid = Math.floor((lo + hi) / 2);
        let left = helper(lst, lo, mid, );
        let right = helper(lst ,mid + 1, hi, );
        return merge(left, right);
    }
        if (list.length === 0) return []

        return helper([...list], 0, list.length - 1);       
}

const merge = (left: Comparable[], right: Comparable[]) : Comparable[] => {
    const sorted_list: Comparable[] = [];
    let l = 0, r = 0;
    while (l < left.length && r < right.length) {
        if (left[l] < right[r]) {
            sorted_list.push(left[l]);
            l++;
        } else {
            sorted_list.push(right[r]);
            r++;
        }
    }
    while (l < left.length) {
        sorted_list.push(left[l]);
        l++;
    }
    while (r < right.length) {
        sorted_list.push(right[r]);
        r++;
    }
    return sorted_list;
}