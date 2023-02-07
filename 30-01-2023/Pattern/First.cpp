#include <bits/stdc++.h>
using namespace std;
int main(){
    int n;
    cout<<"Enter number of Rows: ";
    cin>>n;
    for(int i = 0;i < n;i++){
        for(int j = 0;j < n;j++){
            if(j == 0 || i == n - 1){
                cout<<"*";
            }
           
        }
        cout<<endl;
    }

}