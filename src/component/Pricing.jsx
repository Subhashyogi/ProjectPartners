import React, { useState } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import { Card, CardContent } from '../ui/Card';
import { Button } from '../ui/Button';
import classNames from "classnames";


const Pricing = () => {
    const [selectedPlan, setSelectedPlan] = useState('growth');
    const handlePlanSelect = (plan) => {
        setSelectedPlan(plan);
      };

    return (
        <section
            id="pricing"
            className=" bg-white text-center max-w-6xl mx-auto opacity-0"
            data-aos="fade-left"
        >
            <h2 className="text-3xl font-bold mb-12">Pricing Plans</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8" data-aos="fade-down" data-aos-delay="100">
                {/* Starter Plan */}
                <Card
                    // data-aos="fade-right" data-aos-delay="100"
                    onClick={() => handlePlanSelect("starter")}
                    className={`cursor-pointer transition-transform duration-300 ${selectedPlan === "starter" ? "border-4 border-purple-600 scale-105" : ""
                        }`}
                >
                    <CardContent className="flex flex-col items-center p-6">
                        <h3 className="text-2xl font-semibold mb-2">Starter</h3>
                        <p className="text-4xl font-bold text-purple-600 mb-4">$199</p>
                        <ul className="text-sm text-left mb-6 space-y-2">
                            <li>✓ 1 Campaign Setup</li>
                            <li>✓ Basic Analytics</li>
                            <li>✓ Email Support</li>
                        </ul>
                        <Button className={classNames("cursor-pointer w-full", selectedPlan === "starter"
                            ? "bg-purple-600 text-white hover:bg-purple-700"
                            : "")}>Get Started</Button>
                    </CardContent>
                </Card>

                {/* Growth Plan */}
                <Card
                    // data-aos="fade-down" data-aos-delay="200"
                    onClick={() => handlePlanSelect("growth")}
                    className={`cursor-pointer transition-transform duration-300 ${selectedPlan === "growth"
                        ? "border-4 border-purple-600 scale-105"
                        : "border-2 border-transparent"
                        }`}
                >
                    <CardContent className="flex flex-col items-center p-6">
                        <h3 className="text-2xl font-semibold mb-2">Growth</h3>
                        <p className="text-4xl font-bold text-purple-600 mb-4">$499</p>
                        <ul className="text-sm text-left mb-6 space-y-2">
                            <li>✓ 3 Campaigns</li>
                            <li>✓ Advanced Analytics</li>
                            <li>✓ Priority Support</li>
                        </ul>
                        <Button className={classNames(" cursor-pointer w-full", selectedPlan === "growth"
                            ? "bg-purple-600 text-white hover:bg-purple-700"
                            : "")}>
                            Most Popular
                        </Button>
                    </CardContent>
                </Card>

                {/* Pro Plan */}
                <Card
                    // data-aos="fade-left" data-aos-delay="300"
                    onClick={() => handlePlanSelect("pro")}
                    className={`cursor-pointer transition-transform duration-300 ${selectedPlan === "pro" ? "border-4 border-purple-600 scale-105" : ""
                        }`}
                >
                    <CardContent className="flex flex-col items-center p-6">
                        <h3 className="text-2xl font-semibold mb-2">Pro</h3>
                        <p className="text-4xl font-bold text-purple-600 mb-4">$899</p>
                        <ul className="text-sm text-left mb-6 space-y-2">
                            <li>✓ Unlimited Campaigns</li>
                            <li>✓ Expert Consulting</li>
                            <li>✓ 24/7 Dedicated Support</li>
                        </ul>
                        <Button className={classNames("cursor-pointer w-full", selectedPlan === "pro"
                            ? "bg-purple-600 text-white hover:bg-purple-700"
                            : "")}>Start Pro Plan</Button>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}

export default Pricing;
