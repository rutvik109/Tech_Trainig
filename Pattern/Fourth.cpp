#include <bits/stdc++.h>
using namespace std;
int main(){
    int n;
    cout<<"Enter odd number of Rows: ";
    cin>>n;
    if(n%2 == 0){
        cout<<"Please enter odd number"<<endl;
    }
    else{
    for(int i = 1;i <= n;i++){
    int mid = n/2+1;
        for(int j = 1;j<=n;j++){
                if(i + j == mid + 1  || i-j == n/2 || j-i == n/2 || i + j == n + mid){
                    cout<<"*";
                }
                else{
                    cout<<" ";
                }
        }
        cout<<endl;
    }
    }
}

