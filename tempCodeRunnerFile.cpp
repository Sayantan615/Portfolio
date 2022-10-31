#include<bits/stdc++.h>
using namespace std;

class newClass{
    private:
    int data = 1;
    //Constructor
    
    public:
    newClass(){
        this->data = 2;
    }
    ~newClass(){
        cout << "distructor" << endl;
    }
    int get() { return data; }
    void set(int value) { data = value; }
};

int main(){
    newClass* ob = new newClass();
    int data = ob -> get();
    cout << data << endl;
    delete ob;
}