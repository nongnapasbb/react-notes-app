import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";


export function Login() {
  return (
    <div className="min-h-[calc(100dvh-4rem)] w-full grid place-items-center p-4">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl">Log in</CardTitle>
          <CardDescription>
            Welcome back! Your notes are waiting for you.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form className="space-y-4" noValidate>
            {/* Email */}
            <div className="grid gap-2">
              <label htmlFor="email">Email Address</label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                required
              />
            </div>

            {/* Password */}
            <div className="grid gap-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <button
                  type="button"
                  className="text-xs text-muted-foreground hover:underline"
                >
                
                </button>
              </div>
              <Input
                id="password"
               
                placeholder="••••••••"
              
               
                required
                autoComplete="current-password"
              />
              </div>
          </form>

            <div className="my-6">
            <div className="mt-4 grid grid-cols-1 gap-2">
              <Button
                variant="outline"
                type="button"
                className="w-full bg-pink-white hover:bg-pink-200"
              >
                Log In
              </Button>
            </div>
          </div>

        </CardContent>

        <CardFooter className="justify-center text-sm text-muted-foreground">
          Don't have an account?{" "}
          <Link to="/signup" className="ml-1 text-pink-500 hover:underline">
            Sign up
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
