import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator"
import { Link } from "react-router-dom";

export function Signup() {
  return (
    <div className="min-h-[calc(100dvh-4rem)] w-full grid place-items-center p-4">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl">Sign Up</CardTitle>
          <CardDescription> Create Your Account</CardDescription>
        </CardHeader>

        <CardContent>
          <form className="space-y-4">
            {/* Full name */}
            <div className="grid gap-2">
              <Label htmlFor="fullName">Full Name</Label>
              <Input id="fullName" placeholder="Full Name" required />
            </div>

            {/* Email */}
            <div className="grid gap-2">
              <Label htmlFor="email">Email Adress</Label>
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
                ></button>
              </div>
              <Input
                id="password"
                placeholder="Password"
                required
                minLength={8}
                autoComplete="new-password"
              />
            </div>

            {/* Confirm Password */}
            <div className="grid gap-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <button
                  type="button"
                  className="text-xs text-muted-foreground hover:underline"
                ></button>
              </div>
              <Input
                id="confirmPassword"
                placeholder="Confirm Password"
                required
                autoComplete="new-password"
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
                Sign Up
              </Button>
            </div>
          </div>

        </CardContent>
        <CardFooter className="justify-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link to="/login" className="ml-1 text-pink-600 hover:underline">
            Log in
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
