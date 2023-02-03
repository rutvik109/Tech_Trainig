#include <bits/stdc++.h>
using namespace std;
int main(){
    int n;
    cout<<"Enter number of Rows: ";
    cin>>n;
    for(int i = 0;i < n;i++){
        for(int j = 0;j < n;j++){
            if((i%2 != 0 && j%2 == 0) || (j%2 != 0 && i%2 == 0)){
                cout<<"*";
            }
            else{
                cout<<" ";
            }
           
        }
        cout<<endl;
    }

}