#include <bits/stdc++.h>
using namespace std;
int main(){
    int n;
    cout<<"Enter number of Rows: ";
    cin>>n;
   
   int x = n,y = n;

   for(int i = 0;i < n;i++){
    for(int j = 0;j < n * 2;j++){
        if(j == x || j == y)
        {
        cout<<"*";
        }   
        else{
            cout<<" ";
        }
         }
         cout<<endl;
         y--;
         x++;
   }
}