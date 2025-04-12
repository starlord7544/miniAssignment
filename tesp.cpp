// Online C++ compiler to run C++ program online
#include <iostream>
using namespace std;
long long power(int x, int n)
{
    int mod = 100000;
    long long temp = 1;
    while (n > 0)
    {
        if (n % 2 != 0)
        {
            n--;
            temp = (temp * x) % mod;
        }
        else
        {
            x = (x * x) % mod;
            n /= 2;
        }
    }
    return temp;
}

int main()
{
    int t;
    cin >> t;
    while (t--)
    {
        int n;
        cin >> n;
        long long ans = power(2, n) - 1;
        cout << ans << endl;
    }
    return 0;
}